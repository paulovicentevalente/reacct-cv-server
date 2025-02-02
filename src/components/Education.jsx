import React from "react";
import texts from "../htmlTextsEnglish";

function Education(props) {

    function isEducation(section) {
        return section.component === "Skills" && (section.idiom === "any" || section.idiom === props.idiom);
    }

    const educ = texts.filter(isEducation);

        //If educ is empty or undefined exit the component.
        if (!educ || educ.length === 0) {
          return <div>No education data to display</div>;
        }

    const title = educ.find(item => item.type === 'title');

    // Filter educ data to create items.
    const cards = educ.filter(item => item.type === 'card');

    return (
        <div id="skills">
          {title && title.content && title.content.displayText ?  title.content.displayText : ''}

            <div className="row">
                {cards.map((card, index) => (
                <div className="education-column col-lg-3 col-md-6" key={index}>
                    <div className="mdc-card">
                    {card && card.content && card.content.image && (
                        <div className="mdc-card__media-content">
                            {card.content.image}
                        </div>
                    )}
                         <div className="mdc-card__content">
                            {card && card.content && card.content.title && (
                             <h3>{card.content.title}</h3>
                             )}
                           {card && card.content && card.content.description &&  card.content.description.map((description, index) => (
                              <p key={index}> {description}</p>
                             ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
