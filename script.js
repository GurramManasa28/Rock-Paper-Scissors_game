const gameContainer = document.querySelector(".container"),
    userRes = document.querySelector(".user_res img"),
    computerRes = document.querySelector(".computer_res img"),
    Res = document.querySelector(".res"),
    optionImgs = document.querySelectorAll(".option_img");

optionImgs.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userRes.src = computerRes.src = "./images/rock.png";
        Res.textContent = "Wait....."

        optionImgs.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        gameContainer.classList.add("start");
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userRes.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let computerImgs = ["./images/rock.png", "./images/paper.png", "./images/scissor.png"];
            computerRes.src = computerImgs[randomNumber];
            let computerValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];
            let outcomes = {
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PS: "Computer",
                PR: "User",
                SS: "Draw",
                SR: "Computer",
                SP: "User",
            };
            let outComeValue = outcomes[userValue + computerValue];

            Res.textContent = userValue === computerValue ? "Match Draw" : `${outComeValue} Won..!!!`;
        }, 2500)
    });
});

