import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface answer {
    answer: number;
}

export function RevealAnswer(props: answer): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);
    const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    function toggleHintVisibility() {
        if (answerHintVisible) {
            setanswerHintVisible(false);
        } else {
            setanswerHintVisible(true);
        }
    }

    return (
        <div>
            Answer: {answerVisible && props.answer}
            {answerHintVisible ? "the hint" : ""}
            <span>
                <Button onClick={toggleHintVisibility}>
                    Toggle Hint Visibility
                </Button>

                <Button onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
            </span>
        </div>
    );
}
