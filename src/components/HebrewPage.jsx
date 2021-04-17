import '../App.css';
import React from "react";
import {MailOutlined,FileWordOutlined,HomeOutlined,PhoneOutlined  } from '@ant-design/icons';
import imgcv from '../images/cv.png';
import {Link} from "react-router-dom";



const EnglishPage=()=>{
    return (
    
        <div className="App">
          <div class="wrapper">
            <div class="resume">
                <div class="left">
                    <div class="img_holder"><img src={imgcv} alt="picture"/></div>
                    <div class="contact_wrap pb">
                        <div class="title">
                        פרטים אישיים
                        </div>
                        <div class="contact">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><PhoneOutlined /></div>
                                        <div class="text2">(+972) 52-799-8790</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><MailOutlined /></div>
                                        <div class="text">evgenypavel91@gmail.com</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><HomeOutlined /></div>
                                        <div class="text2">ישראל, נתניה</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills_wrap pb">
                        <div class="title">
                        כישורים
                        </div>
                        <div class="skills">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-html5"></i></div>
                                        <div class="text">HTML</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-css3-alt"></i></div>
                                        <div class="text">CSS</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-js"></i></div>
                                        <div class="text">Javascript</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">React.JS</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">C</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">C++</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">CISCO</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">SQL</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hobbies_wrap pb">
                        <div class="title">
                        שפות
                        </div >
                        
                        
                        <div class="language">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">עברית <span style={{ color: 'deepskyblue' }}>(שותף)</span></div></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text"> אנגלית <span style={{ color: 'deepskyblue' }}>(שוטף)</span></div></div>								
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">רוסית <span style={{ color: 'deepskyblue' }}>(שפת אם)</span></div></div>								
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">רומנית <span style={{ color: 'deepskyblue' }}>(שפת אם)</span></div></div>								
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    
                                    
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        <div class="name_role">
                        <div class="button">
                            <li><div class="text" style={{ color: 'deepskyblue' }}>עבר</div></li>
                        <li><Link to={"/eng"} style={{ color: 'black' }}>eng</Link></li>
                                </div>
                            <div class="name" style={{ textAlign:"right" }}>
                                <span style={{ color: 'black' }}>יבגני</span> פבל
                            </div>	
                            <div class="role" style={{ textAlign:"right" }}>
                            Full Stack Developer
                            </div>
                        </div>
                        <div class="about" style={{ textAlign:"right" }} >
                        אני הנדסאי תוכנה בעל שנתיים ניסיון.
עבדתי בתחומים שונים ועם טכנולוגיות שונות.
מסתדר טוב מאוד בסביבת עבודה מהירה ובעצימות גבוהה.
מנוסה באבחון בעיות ובפתרון תקלות                        
                        </div>
                    </div>
                    <div class="right_inner">
                        <div class="exp">
                            <div class="title">
                            ניסיון תעסוקתי 
                            </div>
                            <div class="exp_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                             עד היום-2018
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                מהנדס תוכנה פרילנסר  
                                                </p>
                                                <p class="info_com">
                                                Freelance
                                                </p>
                                                <ul class="info_cont">
                                                    <li style={{ textIndent:"10px" }}>עוזר למהנדס הראשי .יצירת יישומים חזיתיים</li>
                                                    <li>תכנון, קידוד, בדיקה, איתור באגים-React.js ב</li>
                                                    <li style={{ textIndent:"115px" }}>  והטמעה של 
 תגובה חזיתית  </li>
 .<a href="https://hillel.ru">https://hillel.ru</a>-פיתוח
                                                    
   </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2016 - 2017
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                מנהל מערכת
                                                </p>
                                                <p class="info_com">
                                                קבוצת בתי זיקוק לנפט בע"מ
    
                                                </p>
                                                <p class="info_cont">
                                                    <ul>
                                                    <li style={{ textIndent:"87px" }}>.CISCO,SQL: שימוש בתוכנות ●</li>
                                                    <li style={{ textIndent:"19px" }}>סיפוק תקשורת מקומית בין מערכות הלחץ ●</li>
                                                    <li style={{ textIndent:"75px" }}>-וניתוח, על ידי יצירת הדמיות עם</li>
                                                    <li style={{ textIndent:"20px" }}>.CISCO PACKET TRACER</li>
                                                    <li style={{ textIndent:"46px" }}>עריכת חישובים לשינויים לצורך שיפור ●</li>
                                                    <li style={{ textIndent:"152px" }}>.פעולות בתי הזיקוק</li>
                                                    <li style={{ textIndent:"104px" }}>.ביצוע ניתוח סיכוני תהליכים ●</li>
    
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2011 - 2012
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                (Junior)מתכנת
                                                </p>
                                                <p class="info_com">
                                                IT 'חברת שירות,StarLab SRL
                                                </p>
                                                <p class="info_cont">
                                                <ul>
                                                    <li style={{ textIndent:"20px" }}>.JavaScript,HTML/CSS:ש'מוש בתוכנות ●</li>
                                                    <li style={{ textIndent:"38px" }}>אחראי על יצירת דפי פרסום עבור חברת ●</li>
                                                    <li style={{ textIndent:"23px" }}>.<a href="https://www.moldcell.md/">https://www.moldcell.md/</a> -טלפונים</li>
                                                    <li style={{ textIndent:"137px" }}>.חדשנות ותיקון שגיאות ●</li>
                                                    <li style={{ textIndent:"41px" }}>.עבודה באבחון ממוחשב ותמיכה טכנית ●</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                            רקע אקדמי
                            </div>
                            <div class="education_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2017-2020
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                מהנדס תוכנה מעשית
                                                </p>
                                                <p class="info_com">
                                                טכניון
                                                </p>
                                                <p class="info_cont" style={{ textIndent:"75px" }}>
                                               .פרויקט גמר - אתר חינוכי לילדים 
    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2007-2011
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                Autodiagnostics במדעי המחשב BA
                                                </p>
                                                <p class="info_com">
                                                מכללת תחבורה, מולדובה
                                                </p>
                                                <p class="info_cont">
                                                <ul>
                                                    <li style={{ textIndent:"10px" }}>פרויקט גמר - רכב עם סוללה סולארית, עיצוב</li>
                                                    <li style={{ textIndent:"34px" }}>,(V2D)רכב-מכשיר,AutoCAD במערכת</li>
                                                    <li style={{ textIndent:"150px" }}>.C תכנון תקשורת עם</li>
                                                </ul>
    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                            שירות צבאי
                            </div>
                            <div class="education_wrap">
                                <ul>
                                <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2012-2015
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                חטיבת הנחל, חובש קרבי 
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );

}

export default EnglishPage;