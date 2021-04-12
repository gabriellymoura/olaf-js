
document.body.style.background = "#F0F8FF";
var cena, camera, renderizar, luz;
var bola1, bola2;
var pe1, pe2;
var group;
var botao1,botao2,botao3;
var rosto, cabeca;
var olho1, pupila1, brilho1;
var olho2, pupila2, brilho2;
var nariz1, nariz2;
var boca;
var braco1, dedo1, braco2, dedo2;
var cabelo1, cabelo2, cabelo3;


function criarGroup(){
    group = new THREE.Object3D();
    group.add(bola1);
    group.add(bola2);
    group.add(pe1);
    group.add(pe2);
    group.add(botao1);
    group.add(botao2);
    group.add(botao3);
    group.add(rosto);
    group.add(cabeca);
    group.add(olho1);
    group.add(pupila1);
    group.add(brilho1);
    group.add(olho2);
    group.add(pupila2);
    group.add(brilho2);
    group.add(nariz1);
    group.add(nariz2);
    group.add(boca);
    group.add(braco1);
    group.add(dedo1);
    group.add(braco2);
    group.add(dedo2);
    group.add(cabelo1);
    group.add(cabelo2);
    group.add(cabelo3);
    cena.add(group);
}

function criarOlaf(){

    //corpo
    var bola1Cor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var bola1Ponto = new THREE.SphereGeometry(1,100,100);

    bola1 = new THREE.Mesh(bola1Ponto, bola1Cor);
    bola1.position.set(0.0, -1.5, -7.0);

    var bola2Cor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var bola2Ponto = new THREE.SphereGeometry(0.7,100,100);

    bola2 = new THREE.Mesh(bola2Ponto, bola2Cor);
    bola2.position.set(0.0, -0.3, -7.0);

    var pe1Cor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var pe1Ponto = new THREE.SphereGeometry(0.3,100,100);
    pe1 = new THREE.Mesh(pe1Ponto, pe1Cor);
    pe1.position.set(-0.3, -2.0, -6.0);

    var pe2Cor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var pe2Ponto = new THREE.SphereGeometry(0.35,100,100);
    pe2 = new THREE.Mesh(pe2Ponto, pe2Cor);
    pe2.position.set(0.3, -2.0, -6.0);

    var botao1Cor = new THREE.MeshBasicMaterial({
        color:0x4B0082,
        side:THREE.DoubleSide
    });
    var botao1Ponto = new THREE.SphereGeometry(0.2,150,150);
    botao1 = new THREE.Mesh(botao1Ponto, botao1Cor);
    botao1.position.set(-0.3, -0.3, -5.8);

    var botao2Cor = new THREE.MeshBasicMaterial({
        color:0x4B0082,
        side:THREE.DoubleSide
    });
    var botao2Ponto = new THREE.SphereGeometry(0.2,150,150);
    botao2 = new THREE.Mesh(botao2Ponto, botao2Cor);
    botao2.position.set(-0.45, -1.2, -5.8);

    var botao3Cor = new THREE.MeshBasicMaterial({
        color:0x4B0082,
        side:THREE.DoubleSide
    });
    var botao3Ponto = new THREE.SphereGeometry(0.2,150,150);
    botao3 = new THREE.Mesh(botao3Ponto, botao3Cor);
    botao3.position.set(-0.4, -1.70, -5.8);

    // cabeça
    var rostoCor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var rostoPonto = new THREE.Geometry();
    rostoPonto.vertices.push(new THREE.Vector3(-0.4, -1,  -3.5));
    rostoPonto.vertices.push(new THREE.Vector3( 0.4, -1,  -3.5));
    rostoPonto.vertices.push(new THREE.Vector3(1.2,  1,  -3.5));
    rostoPonto.vertices.push(new THREE.Vector3(-1.2,  1,  -3.5));

    rostoPonto.faces.push(new THREE.Face4(0, 1, 2, 3));

	rosto = new THREE.Mesh(rostoPonto, rostoCor);
    rosto.position.set(0, 1, -5.0);
    
    var cabecaCor = new THREE.MeshBasicMaterial({
        color:0xF0F8FF,
        side:THREE.DoubleSide
    });
    var cabecaPonto = new THREE.SphereGeometry(0.8,100,100);
    cabeca = new THREE.Mesh(cabecaPonto, cabecaCor);
    cabeca.position.set(0.0, 1.8, -7.0);

    //olhos
    var olho1Cor = new THREE.MeshBasicMaterial({
        color: 0xFFFFFFF,
        side: THREE.DoubleSide
    });
    var olho1Ponto = new THREE.SphereGeometry(0.15,100,100);
    olho1 = new THREE.Mesh(olho1Ponto, olho1Cor);
    olho1.position.set(-0.15, 1.35, -5.0);
    var pupila1Cor = new THREE.MeshBasicMaterial({
        color: 0x8B4513,
        side: THREE.DoubleSide
    });
    var pupila1Ponto = new THREE.SphereGeometry(0.08,100,100);
    pupila1 = new THREE.Mesh(pupila1Ponto, pupila1Cor);
    pupila1.position.set(-0.12, 1.09, -4.0);
    var brilho1Cor = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    });
    var brilho1Ponto = new THREE.SphereGeometry(0.02,100,100);
    brilho1 = new THREE.Mesh(brilho1Ponto, brilho1Cor);
    brilho1.position.set(-0.055, 0.85, -3.0);

    var olho2Cor = new THREE.MeshBasicMaterial({
        color: 0xFFFFFFF,
        side: THREE.DoubleSide
    });
    var olho2Ponto = new THREE.SphereGeometry(0.15,100,100);
    olho2 = new THREE.Mesh(olho2Ponto, olho2Cor);
    olho2.position.set(0.15, 1.35, -5.0);

    var pupila2Cor = new THREE.MeshBasicMaterial({
        color: 0x8B4513,
        side: THREE.DoubleSide
    });
    var pupila2Ponto = new THREE.SphereGeometry(0.08,100,100);
    pupila2 = new THREE.Mesh(pupila2Ponto, pupila2Cor);
    pupila2.position.set(0.12, 1.09, -4.0);

    var brilho2Cor = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    });
    var brilho2Ponto = new THREE.SphereGeometry(0.02,100,100);
    brilho2 = new THREE.Mesh(brilho2Ponto, brilho2Cor);
    brilho2.position.set(0.13, 0.85, -3.0);
    
    //nariz
    var nariz1Cor = new THREE.MeshBasicMaterial({
        color: 0xFF4500,
        side: THREE.DoubleSide
    });
    var nariz1Ponto = new THREE.SphereGeometry(0.15,100,100);
    nariz1 = new THREE.Mesh(nariz1Ponto, nariz1Cor);
    nariz1.position.set(0.1, 1, -5.0);
    
    var nariz2Cor = new THREE.MeshBasicMaterial({
        color: 0xFF4500,
        side: THREE.DoubleSide
    });
    var nariz2Ponto = new THREE.Geometry();
    nariz2Ponto.vertices.push(new THREE.Vector3(0.14, -0.18,  -3.5));
    nariz2Ponto.vertices.push(new THREE.Vector3(0.2, 0.09,  -3.5));
    nariz2Ponto.vertices.push(new THREE.Vector3(0.8,  -0.2,  -3.5));

    nariz2Ponto.faces.push(new THREE.Face3(0, 1, 2));

	nariz2 = new THREE.Mesh(nariz2Ponto, nariz2Cor);
    nariz2.position.set(-0.1, 0.95, -1.0);

    //boca
    var bocaCor = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,
        side:THREE.DoubleSide
    });
    var bocaPonto = new THREE.Geometry();
    bocaPonto.vertices.push(new THREE.Vector3(-0.3, -0.15,  -3.5));
    bocaPonto.vertices.push(new THREE.Vector3(0.3, -0.15,  -3.5));
    bocaPonto.vertices.push(new THREE.Vector3(0.3,  0.15,  -3.5));
    bocaPonto.vertices.push(new THREE.Vector3(-0.3,  0.15,  -3.5));
    bocaPonto.faces.push(new THREE.Face4(0, 1, 2, 3));

	boca = new THREE.Mesh(bocaPonto, bocaCor);
    boca.position.set(0.2, 0.7, -2.0);

    //braços
    var braco1Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var braco1Ponto = new THREE.Geometry();
    braco1Ponto.vertices.push(new THREE.Vector3(-0.08, -0.15,  -3.5));
    braco1Ponto.vertices.push(new THREE.Vector3(0.08, -0.15,  -3.5));
    braco1Ponto.vertices.push(new THREE.Vector3(0.08,  1,  -3.5));
    braco1Ponto.vertices.push(new THREE.Vector3(-0.08,  1,  -3.5));
    braco1Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));

	braco1 = new THREE.Mesh(braco1Ponto, braco1Cor);
    braco1.position.set(0.3, -1, -2.0);

    var dedo1Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var dedo1Ponto = new THREE.Geometry();
    dedo1Ponto.vertices.push(new THREE.Vector3(-0.09, -0.06,  -3.5));
    dedo1Ponto.vertices.push(new THREE.Vector3(0.09, -0.06,  -3.5));
    dedo1Ponto.vertices.push(new THREE.Vector3(0.09,  0.06,  -3.5));
    dedo1Ponto.vertices.push(new THREE.Vector3(-0.09,  0.06,  -3.5));
    dedo1Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));

	dedo1 = new THREE.Mesh(dedo1Ponto, dedo1Cor);
    dedo1.position.set(0.2, -1, -2.0);

    var braco2Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var braco2Ponto = new THREE.Geometry();
    braco2Ponto.vertices.push(new THREE.Vector3(-0.15, -0.08,  -3.5));
    braco2Ponto.vertices.push(new THREE.Vector3(1, -0.08,  -3.5));
    braco2Ponto.vertices.push(new THREE.Vector3(1,  0.08,  -3.5));
    braco2Ponto.vertices.push(new THREE.Vector3(-0.15,  0.08,  -3.5));
    braco2Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));

	braco2 = new THREE.Mesh(braco2Ponto, braco2Cor);
    braco2.position.set(-1.5, -0.2, -2.0);

    var dedo2Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    })
    var dedo2Ponto = new THREE.Geometry();
    dedo2Ponto.vertices.push(new THREE.Vector3(-0.07, -0.06,  -3.5));
    dedo2Ponto.vertices.push(new THREE.Vector3(0.07, -0.06,  -3.5));
    dedo2Ponto.vertices.push(new THREE.Vector3(0.07,  0.06,  -3.5));
    dedo2Ponto.vertices.push(new THREE.Vector3(-0.07,  0.06,  -3.5));
    dedo2Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));2
	dedo2 = new THREE.Mesh(dedo2Ponto, dedo2Cor);
    dedo2.position.set(-1.5, -0.1, -2.0);

    
    var cabelo1Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var cabelo1Ponto = new THREE.Geometry();
    cabelo1Ponto.vertices.push(new THREE.Vector3(-0.03, -0.13,  -3.5));
    cabelo1Ponto.vertices.push(new THREE.Vector3(0.03, -0.13,  -3.5));
    cabelo1Ponto.vertices.push(new THREE.Vector3(0.03,  0.13,  -3.5));
    cabelo1Ponto.vertices.push(new THREE.Vector3(-0.03,  0.13,  -3.5));
    cabelo1Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));

	cabelo1 = new THREE.Mesh(cabelo1Ponto, cabelo1Cor);
    cabelo1.position.set(0, 2.1, -2.0)

    var cabelo2Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var cabelo2Ponto = new THREE.Geometry();
    cabelo2Ponto.vertices.push(new THREE.Vector3(-0.08, -0.13,  -3.5));
    cabelo2Ponto.vertices.push(new THREE.Vector3(0.01, -0.13,  -3.5));
    cabelo2Ponto.vertices.push(new THREE.Vector3(0.08,  0.13,  -3.5));
    cabelo2Ponto.vertices.push(new THREE.Vector3(-0.01,  0.13,  -3.5));
    cabelo2Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));
	cabelo2 = new THREE.Mesh(cabelo2Ponto, cabelo2Cor);
    cabelo2.position.set(0.2, 2.1, -2.0)

    var cabelo3Cor = new THREE.MeshBasicMaterial({
        color:0x8B4513,
        side:THREE.DoubleSide
    });
    var cabelo3Ponto = new THREE.Geometry();
    cabelo3Ponto.vertices.push(new THREE.Vector3(0.08, -0.13,  -3.5));
    cabelo3Ponto.vertices.push(new THREE.Vector3(-0.01, -0.13,  -3.5));
    cabelo3Ponto.vertices.push(new THREE.Vector3(-0.08,  0.13,  -3.5));
    cabelo3Ponto.vertices.push(new THREE.Vector3(0.01,  0.13,  -3.5));
    cabelo3Ponto.faces.push(new THREE.Face4(0, 1, 2, 3));
	cabelo3 = new THREE.Mesh(cabelo3Ponto, cabelo3Cor);
    cabelo3.position.set(-0.2, 2.1, -2.0)

}

function iniciar(){
    //size da Tela
    var canvasWidth = 1000;
    var canvasHeight = 500;

    //Renderizar
    renderizar = new THREE.WebGLRenderer();
    renderizar.setClearColorHex(0x5bc0de, 1);
    renderizar.setSize(canvasWidth, canvasHeight);

    //PEGANDO A DIV CANVAS 
    document.getElementById("canvas").appendChild(renderizar.domElement);

    //Cena
    cena = new THREE.Scene();

    //Pespectiva da Camera
    camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 100);
    //NO CENTRO DO EIXO Z
    camera.position.set(0, 0, 0);
    camera.lookAt(cena.position);
    cena.add(camera);

    criarOlaf();
    criarGroup();
}

function renderEscena(){
    renderizar.render(cena, camera);
}

function animarEscena(){
    group.rotation.z += 0.1;
    renderEscena();
    requestAnimationFrame(animarEscena);
    
}

function animarScalarMais(){
    group.position.z += 0.3;
        renderEscena();
}

function animarScalarMenos(){
    group.position.z -= 0.3;
        renderEscena();
}

function animarReflexoX(){
        group.scale.y = -1;
        group.scale.x = 1;
        renderEscena();
}
function animarReflexoXY(){
    group.scale.y = -1;
    group.scale.x = -1;
    renderEscena();
}

function animarUp(){
        group.position.y += 0.5;
        renderEscena();
}

function animarDown(){
        group.position.y += -0.5;
        renderEscena();
}

function animarLeft(){
        group.position.x += -0.5;
        renderEscena();
}

function animarRight(){
        group.position.x += 0.5;
        renderEscena();
}

function main(){
    iniciar();
    ultimoTiempo=Date.now();
    renderEscena();
}		
