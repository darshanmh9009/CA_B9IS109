import "../../style/globals.css";
import "../../style/task.css";

const Task = (props) => {
    var RenderedPage = [];
    var renderFuncReturnValue = "";

    props.taskElements.map((taskEl) => {
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
                    src="../../assets/laptop.png"
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
        <div className="task">
            <h1 className="page-heading numpy">{props.heading}</h1>

            <h1 className="small-page-heading numpy">{props.subheading}</h1>

            {props.ytURL && (
                <div className="flex">{props.ytURL}</div>
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
    )
}

export default Task
