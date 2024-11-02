import { Field } from "@progress/kendo-react-form";
import styles from './page.module.css';
import { Input } from "@progress/kendo-react-inputs";
import { Switch } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";

export default function PersonalDetails(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <fieldset className="k-form-fieldset">
                <legend className="k-form-legend">
                    Contact details for severe weather phenomena and natural disasters alerts
                </legend>
                {/*<Field
                    component={Input}
                    name="nickName"
                    label="Nickname"
                    id="nickName"
                />
                <Field
                    component={Input}
                    name="email"
                    label="Email"
                    id="emailAddress" />
                <Field
                    component={Input}
                    name="phoneNumber"
                    label="Phone Number" /> */}
                <Label className={styles.switchLabel}>Allow app to know your current location</Label>
                <Field
                    component={Switch}
                    name="isLocationAccessGranted"
                    id="isLocationAccessGranted"
                    onChange={() => {
                        navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
                            console.log(pos)
                        })
                    }} />
                {/*<Label className={styles.switchLabel}>Allow app to send you alerts for severe weather phenomena and natural disasters</Label>
                 <Field
                    component={Switch}
                    name="allowPushNotifications"
                    id="allowPushNotifications"
                    onChange={() => {
                        Notification.requestPermission().then((result: NotificationPermission) => {
                            console.log(result)
                        })
                    }} /> */}
            </fieldset>
        </div>
    );
}