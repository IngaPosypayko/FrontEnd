import React from  'react';
// import RetroFinishButton from './RetroFinishButton';



function RetroGrids() {

    return (
        <div className="wrapper">


            <div className="retro__container">

                <div className="retro__box retro__box--1">
                    <div className="retro__title">
                         <p>What was great in the sprint?</p>
                    </div>
                    <div className="retro__content">
                         //Поле для стикеров
                    </div>
                </div>

            </div>



            <div className="retro__container retro__container--2">
                <div className="retro__box retro__box--2">
                     <div className="retro__title">
                          <p>What was wrong in the sprint?</p>
                     </div>
                     <div className="retro__content">
                            //Поле для стикеров
                     </div>
                </div>
            </div>



            <div className="retro__container">
                <div className="retro__box retro__box--3">
                     <div className="retro__title">
                          <p>What was wrong in the sprint?</p>
                     </div>
                     <div className="retro__content">
                          //Поле для стикера
                      </div>
                </div>
            </div>



            <div className="retro__container retro__container--4">
                 <div className="retro__box retro__box--4">

                     <div className="retro__title">
                           <p>Add as tasks to the Next Sprint</p>
                       </div>

                     <div className="retro__members">
                          <div className="members__title">
                            <p className="members__title--text">My partners:</p>
                          </div>
                      </div>

                     <div className="retro__content">
                            //Поле для стикера
                     </div>

                     <div className="retro__finish retro__finish--4">
                            //кнопка finish retro
                     </div>

                 </div>
            </div>

    </div>


    );
}

export default RetroGrids;