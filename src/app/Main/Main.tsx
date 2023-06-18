import MainHeader from '../../components/MainHeader';
import Divider from '../../components/elements/Divider';
import { MainInputContainer } from '../../containers/main/MainInputContainer';
import fileLog from  '../../assests/file.png';
import { getFirstLatters } from '../../utilits/utilits';
import { ILinksArr } from '../../types';
import { MainPageLayout } from '../../components/layouts/MainPageLayout/MainPageLayout';


export const Main = () => {
    const fullName = 'Владислав Перегуда';
    const firstLatters = getFirstLatters(fullName);

    const linksArr:ILinksArr[] = [
        {image:fileLog , link: 'https://github.com/Vanilio1997',text: 'GitHub' },
        {image:fileLog, link:'https://t.me/Vladislav_Pereguda' , text:'Telegram'},
        {image: fileLog,link:'https://hh.ru/resume/9b8a39b9ff070302fa0039ed1f56453575456b', text:'Resume'}
    ];

    return (
        <MainPageLayout>
            <MainHeader shortName={firstLatters} userName={fullName} linksArr={linksArr} />
            <Divider />
            <MainInputContainer />
        </MainPageLayout>
    );
};
