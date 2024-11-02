import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Loader } from "@progress/kendo-react-indicators";

export default function HazardAssessment(): React.JSX.Element {
    const [userHazardAssessmentReport, setUserHazardAssessmentReport] = useState('');
    useEffect(() => {
        const getUserHazardAssessmentReport = () => {

            navigator.geolocation.getCurrentPosition((position) => {
                setUserHazardAssessmentReport(`https://ulap-reports.georisk.gov.ph/api/reports/hazard-assessments/${position.coords.longitude}/${position.coords.latitude}`);
            })
        }
        getUserHazardAssessmentReport();
    }, []);

    return (
        <div className={styles.wrapper}>
            <fieldset className="k-form-fieldset">
                <legend className="k-form-legend">
                    Get your hazard assessment report on your current location
                </legend>
                {userHazardAssessmentReport ? (
                    <a className={styles.wrapper} style={{ display: 'grid', textAlign: 'center' }} href={userHazardAssessmentReport} >Hazard assessment report</a>
                ) : (<Loader className={styles.wrapper} size="large" type={'converging-spinner'} />)}
            </fieldset>
        </div >
    )
}