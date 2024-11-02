"use client"

import styles from './page.module.css';
import { useState } from 'react';
import { Form, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Stepper } from "@progress/kendo-react-layout";
import PersonalDetails from './personal-details'
import HazardAssessment from './hazard-assessment';
import { Button } from '@progress/kendo-react-buttons';
import { infoSolidIcon, reportElementIcon } from '@progress/kendo-svg-icons';

const stepPages = [<PersonalDetails />, <HazardAssessment />]

export default function HazardAssessmentForm(): JSX.Element {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState([]);
  const [steps, setSteps] = useState([
    { svgIcon: infoSolidIcon },
    { svgIcon: reportElementIcon }
  ]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  return (
    <div className={styles.wrapper}>
      <div className="row">
        <Stepper style={{}} value={step} items={steps} />
      </div>
      <Form
        initialValues={formState}
        render={(formRenderProps: FormRenderProps) => (
          <div className={styles.center}>
            <FormElement>
              {stepPages[step]}
              <div className={styles.buttonContainer}>
                {step !== 0 ? (
                  <Button onClick={() => { setStep(step - 1) }} themeColor={'secondary'}>Previous</Button>
                ) : <Button themeColor={'primary'} onClick={() => { setStep(step + 1) }}>Next</Button>}
              </div>
            </FormElement>
          </div>
        )
        }>
      </Form >

    </div >
  )
}

