import React from "react";
// import MDCRipple from '@material/ripple';
import texts from "../htmlTextsEnglish";
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';



function Education() {
    return (
        <div>

		{texts[34].content[1]}



		<div className=" row">
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{texts[35].content[1]}
					</div>
					<div className="mdc-card__content">
						{texts[36].content[1]}
						{texts[36].content[2]}
						{texts[36].content[3]}
						{texts[36].content[4]}
					</div>
				</div>
			</div>
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{texts[37].content[1]}
					</div>
					<div className="mdc-card__content">
						{texts[38].content[1]}
						{texts[38].content[2]}
						{texts[38].content[3]}
						{texts[38].content[4]}
					</div>
				</div>
				</div>
				<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{texts[41].content[1]}
					</div>
					<div className="mdc-card__content">
						{texts[42].content[4]}
						{texts[42].content[2]}
						{texts[42].content[1]}
						{texts[42].content[3]}

					</div>
				</div>
			</div>
			<div className="education-column col-lg-3 col-md-6">
				<div className="mdc-card">
					<div className="mdc-card__media-content">
						{texts[39].content[1]}	
					</div>
					<div className="mdc-card__content">
						{texts[40].content[1]}
						{texts[40].content[2]}
						{texts[40].content[3]}
						{texts[40].content[4]}					
					</div>
				</div>
			</div>


		</div>

   
    	</div>
    );
}

export default Education;