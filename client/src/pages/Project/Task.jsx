import React from "react";
import "../../style/globals.css";
import "../../style/task.css";
import { laptop } from "../../assets/images";

export default function Task(props) {
    var RenderedPage = [];
    var renderFuncReturnValue = "";

    // as soon as the taskId state gets update. 
    // make a fetch from the database and display the task page corresponding to the taskId. 
    // make a backend request for the same

    const heading = `${props.projectDetails.taskName}` ;
    const subheading = "Hello everyone, welcome to our first course."
    const ytURL = 
    <iframe 
        className="iframe"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/rEGkSf41OsM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>;
    const taskElements = [
        [
            "heading",
            "big",
            "",
            "Lorem ipsum dolor sit amet.",
        ], [
            "text",
            "highlighted",
            "blue",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, optio iste magnam omnis excepturi delectus consequuntur laborum deleniti molestiae vitae? Reprehenderit nobis aliquid dolorem assumenda voluptas est eveniet obcaecati quo minus aperiam! Iste perferendis hic assumenda temporibus rem, debitis alias doloremque atque enim tempore qui accusamus dolor eligendi obcaecati dignissimos!",
        ], [
            "image",
            "big",
            "",
            "Large Image",
            "",
        ], [
            "text",
            "regular",
            "",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi dicta similique optio ad laudantium harum odit odio consectetur quod."
        ], [
            "text",
            "highlighted",
            "yellow",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia assumenda adipisci facere maiores ducimus consectetur quisquam ab! Nesciunt, porro."
        ], [
            "heading",
            "small",
            "",
            "How it works?"
        ], [
            "text",
            "highlighted",
            "orange",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi dicta similique optio ad laudantium harum odit odio consectetur quod."
        ], [
            "text",
            "regular",
            "grey",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi dicta similique optio ad laudantium harum odit odio consectetur quod."
        ], [
            "image",
            "small",
            "",
            "Small Image",
            "--url--",
        ], [
            "text",
            "highlighted",
            "grey",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi dicta similique optio ad laudantium harum odit odio consectetur quod."
        ], [
            "text",
            "regular",
            "",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae ea earum natus magni doloribus praesentium et corporis iure dolorum nulla, minima amet odit ut, expedita similique esse, eaque a deleniti qui excepturi? Expedita ipsa commodi voluptas id, nostrum cupiditate blanditiis eius fugiat dolorum ratione culpa facere vel, tempora excepturi!"
        ]
    ];

    taskElements.map((taskEl) => {
        if (taskEl[0] === "heading") {
            renderFuncReturnValue = renderHeading(taskEl);
        }

        if (taskEl[0] === "image") {
            renderFuncReturnValue = renderImg(taskEl);
        }

        if (taskEl[0] === "text") {
            renderFuncReturnValue = renderText(taskEl);
        }

        RenderedPage.push(renderFuncReturnValue);
        // if in case next element is none of the above, the previous element must not be rendered twice
        renderFuncReturnValue = "";
    });

    function renderHeading(taskElArray) {
        return (
            <div className="task-element heading-element">
                <h1 className={taskElArray[1] === "big" ? "medium-heading numpy" : "small-heading numpy"}>
                    {taskElArray[3]}
                </h1>
            </div>
        );
    }

    function renderImg(taskElArray) {
        return (
            <div className="task-element img-element">
                <img
                    className={taskElArray[1] === "big" ? "large-task-img" : "small-task-img"}
                    src={laptop}
                    alt="task image element"
                    // width={100}
                    // height={100}
                ></img>
                <span className="under-img-text flex">{taskElArray[3]}</span>
            </div>
        );
    }

    function renderText(taskElArray) {
        const classList = taskElArray[1] === "regular" ? "regular-text" : `regular-text highlighted-text ${taskElArray[2]}-text-color`;
        
        return (
            <div className="task-element text-element">
                <span className={classList}>{taskElArray[3]}</span>
            </div>
        );
    }

    return (
        <>
            <div className="task">
                <h1 className="page-heading numpy">{heading}</h1>

                <h1 className="small-page-heading numpy">{subheading}</h1>

                {ytURL && (
                    <div className="flex">{ytURL}</div>
                )}

                {RenderedPage && RenderedPage}

                <div className="bellow-task-btn flex">
                    <button 
                        className="bottom-task-btn"
                    >
                        Previous Task
                    </button>

                    <button 
                        className="bottom-task-btn"
                    >
                        Mark as complete
                    </button>

                    <button 
                        className="bottom-task-btn"
                    >
                        Next Task
                    </button>
                </div>
            </div>
        </>
    );
}
