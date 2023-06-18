import React from 'react';
import { FirstForm } from '../../containers/create/FirstForm';
import { SecondForm } from '../../containers/create/SecondFrom/SecondForm';
import { ThirdForm } from '../../containers/create/ThirdForm';
import ProgressBar from '../../components/elements/ProgressBar';
import { FormPageLayout } from '../../components/layouts/FormPageLayout/FormPageLayout';
import { useAppSelector } from '../../hooks';

export const Create = () => {

    const currentPage = useAppSelector(state => state.page.currentPage);
    console.log(currentPage);
    return (
        <FormPageLayout>
            <ProgressBar  length={3}/>
            {
                currentPage === 1 ?
                    <FirstForm />:null
            }
            {
                currentPage === 2 ?
                    <SecondForm />:null
            }
            {
                currentPage === 3 ?
                    <ThirdForm />:null
            }

        </FormPageLayout>
    );
};
