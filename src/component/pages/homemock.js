/*html
<div class="container">
	<div class="blob-c">
	<div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
	<div class="shape-blob three"></div>
    <div class="shape-blob four"></div>
    <div class="shape-blob five"></div>
    <div class="shape-blob six"></div>
	</div>
    <h3>Hola, soy Norberto, Desarrollador Full Stack</h3>

</div>*/
/* css
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900');

h3{
    color: white;
}

body {
	margin: 0;
	padding: 0;
}

.container {
	background:#1F2024;
    background: rgb(7,7,8);
    background: linear-gradient(180deg, rgba(7,7,8,1) 59%, rgba(191,191,196,1) 92%, rgba(240,244,245,1) 100%);
    
    border-radius: 20px;
	min-height: 100vh;
    border-radius: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
}

.blob-c {
	min-height: 100vh;
	overflow: hidden;
	position:absolute;
	width: 100%;
	filter: blur(40px);
/*   background: rgba(255,255,255,0.1) */
/*}

.shape-blob {
	background:#26C3F9;
    background:  rgb(250, 224, 228);
	height: 60px;
	width: 80px;
	border-radius: 40% 50% 30% 40%;
  	animation: 
		transform 18s ease-in-out infinite both alternate,
		movement_one 12s ease-in-out infinite both;
	opacity:.9;
	position: absolute;
	left: 75%;
	top: 40%;
}
.shape-blob.one{
	background:#0085FF;
    background:  rgb(250, 224, 228);
	height: 150px;
	width: 200px;
	left: 10px;
	top: 10px;
	transform: rotate(-180deg);
	animation: transform 8s ease-in-out infinite both alternate, movement_two 20s ease-in-out infinite both;
}

.shape-blob.six{
	background:#0EAFFF;
    background:  rgb(250, 224, 228);
	height: 70px;
	width: 100px;
	left: 160px;
	top: 200px;
	transform: rotate(-180deg);
	animation: transform 5s ease-in-out infinite both alternate, movement_two 5s ease-in-out infinite both;
}

.shape-blob.four{
	background:#4EAEFF;
    background:  rgb(250, 224, 228);
	height: 100px;
	width: 80px;
	left: 350px;
	top: 60px;
	transform: rotate(-180deg);
	animation: transform 17s ease-in-out infinite both alternate, movement_two 13s ease-in-out infinite both;
}

.shape-blob.five{
	background:#0085FF;
    background:  rgb(250, 224, 228);
	height: 100px;
	width: 80px;
	left: 480px;
	top: 30px;
	transform: rotate(-180deg);
	animation: transform 12s ease-in-out infinite both alternate, movement_two 18s ease-in-out infinite both;
}

.shape-blob.two{
	background:#4EAEFF;
    background:  rgb(250, 224, 228);
	height: 150px;
	width: 150px;
	left: 600px;
	top: 150px;
	transform: rotate(-180deg);
	animation: transform 10s ease-in-out infinite both alternate, movement_two 10s ease-in-out infinite both;
}

.shape-blob.three{
	background:#0EAFFF;
    background:  rgb(250, 224, 228);
	height: 150px;
	width: 150px;
	left: 800px;
	top: 30px;
	transform: rotate(-180deg);
	animation: transform 7s ease-in-out infinite both alternate, movement_two 23s ease-in-out infinite both;
}

@keyframes transform
{
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; } 
   80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; } 
}


@keyframes movement_one
{
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }
}

@keyframes movement_two
{
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.3);}
}

h1 {
	font-family: 'Playfair Display', serif;
	font-size: 5em;
	letter-spacing: 2px;
	font-weight: 900;
	color: white;
	line-height: .9em;
	position: absolute;
	z-index: 4;
	text-shadow: 2px 3px 15px rgba(0,0,0,.15);
}*/