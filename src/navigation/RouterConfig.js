import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormPersonalData, PagePersonalSocialMedia, PagePreviewProfile } from '../pages/admin';
import { PageLogin, PageRegister } from '../pages/auth';
import { PageNotFound } from '../pages/public';
import { PageHome } from '../pages/PageHome';

import { FORM_DATA_INFORMATION, HOME, LOGIN, PERSONAL_SOCIAL_MEDIA, PREVIEW } from './CONSTANTS';

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={HOME} element={<PageHome/>}></Route>
            <Route exact path={REGISTER} element={<PageRegister></PageRegister>} ></Route>
            <Route exact path={LOGIN} element={<PageLogin />}></Route>
            <Route exact path={PERSONAL_SOCIAL_MEDIA} element={<PagePersonalSocialMedia></PagePersonalSocialMedia>}></Route>
            <Route exact path={FORM_DATA_INFORMATION} element={<FormPersonalData></FormPersonalData>}></Route>
            
            <Route exact path={PREVIEW} element= {<PagePreviewProfile></PagePreviewProfile>}></Route>
            
            
            
            
            
            
            
            {/* <Route exact path={JOB_BUSQUEDA_RESULTADO} element={PageSearchJobsResults}></Route>
    <Route exact path={JOB_BUSQUEDA_RESULTADO_ITEM_DEF} element={PageResultadoJob} ></Route> */}
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}