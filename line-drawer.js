window.onload = () => {



    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    const origin = [ canvas.width / 2, canvas.height /2]

    addEventListener("mousemove", (event) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 5;

        const mouseCoords = [event.clientX, event.clientY];

        const midCoords = mouseCoords.map((coord, i) => (coord + origin[i]) / 2);

        const [lenX, lenY] = mouseCoords.map((coord, i) => coord - origin[i]);

        ctx.beginPath();
        ctx.moveTo(...origin);

        // if (Math.abs(lenX) > Math.abs(lenY)) {
        //     ctx.lineTo(midCoords[0], origin[1]);
        //     ctx.lineTo(midCoords[0], mouseCoords[1]);
        //     ctx.lineTo(...mouseCoords);
        // } else {
        //     ctx.lineTo(origin[0], midCoords[1]);
        //     ctx.lineTo(mouseCoords[0], midCoords[1]);
        //     ctx.lineTo(...mouseCoords);
        // }
        if (Math.abs(lenX) > Math.abs(lenY)) {
            ctx.bezierCurveTo(midCoords[0], origin[1], midCoords[0], mouseCoords[1], ...mouseCoords);
        } else {
            ctx.bezierCurveTo(origin[0], midCoords[1], mouseCoords[0], midCoords[1], ...mouseCoords);

        }


        ctx.stroke()
    });


    addEventListener("touchmove", (event) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 5;

        const mouseCoords = [event.touches[0].clientX, event.touches[0].clientY];
        console.log(mouseCoords)

        const midCoords = mouseCoords.map((coord, i) => (coord + origin[i]) / 2);

        const [lenX, lenY] = mouseCoords.map((coord, i) => coord - origin[i]);

        ctx.beginPath();
        ctx.moveTo(...origin);

        // if (Math.abs(lenX) > Math.abs(lenY)) {
        //     ctx.lineTo(midCoords[0], origin[1]);
        //     ctx.lineTo(midCoords[0], mouseCoords[1]);
        //     ctx.lineTo(...mouseCoords);
        // } else {
        //     ctx.lineTo(origin[0], midCoords[1]);
        //     ctx.lineTo(mouseCoords[0], midCoords[1]);
        //     ctx.lineTo(...mouseCoords);
        // }
        if (Math.abs(lenX) > Math.abs(lenY)) {
            ctx.bezierCurveTo(midCoords[0], origin[1], midCoords[0], mouseCoords[1], ...mouseCoords);
        } else {
            ctx.bezierCurveTo(origin[0], midCoords[1], mouseCoords[0], midCoords[1], ...mouseCoords);

        }


        ctx.stroke()
    });

}
