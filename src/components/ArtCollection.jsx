import React from 'react';

const ArtCollection = () => {
    return (
        <div className='artcollection'>
            <h3>ART COLLECTION</h3>
            <div className='banner-row'>
                <div className='img-banner'>
                    <div className='banner-text'>
                        <p className='bnr-name'>STUDIO YUNYEODONG</p>
                        <p className='bnr-description'>금속의 다채로운 스펙트럼</p>
                    </div>
                    <div className='bnr-img first'></div>
                </div>
                <div className='img-banner'>
                    <div className='banner-text'>
                        <p className='bnr-name'>LEE KIHOON</p>
                        <p className='bnr-description'>수많은 흐름이 상호작용을 이루는 脈, 맥</p>
                    </div>
                    <div className='bnr-img second'></div>
                </div>
                <div className='img-banner'>
                    <div className='banner-text'>
                        <p className='bnr-name'>SHIM SEUNG YEUN</p>
                        <p className='bnr-description'>대담하면서 균형적인 가구</p>
                    </div>
                    <div className='bnr-img third'></div>
                </div>
            </div>
        </div>
    );
};

export default ArtCollection;