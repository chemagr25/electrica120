<template>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



.jeje {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1c40f;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
}


.slider-container::-webkit-scrollbar {
    height: 7px;
}

.slider-container::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
}

.slider-container::-webkit-scrollbar-thumb {
    background: #ffffffae;
    border-radius: 10px;
}

.slider-container::-webkit-scrollbar-thumb:hover {
    background: #fff;
}

.slider-container{
    width: 100%;
    overflow-x: auto;
}

.slider {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    gap: 40px;
    overflow-x: auto;
    margin: auto;
    padding: 20px;
}

.slide {
    width: 250px;
    height: 300px;
    background-color: #fff;
    border-radius: 2px;
    margin-bottom: 20px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s ease;
}

.slide h4{
    font-size: 30px;
}

.slide p{
    font-size: 14px;
    margin-top: 5px;
    opacity: 0.7;
    margin-bottom: 20px;
}

.slide .icon{
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-size: 30px;
}

.slide:hover{
    scale: 1.1;
}</style>