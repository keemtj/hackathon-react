/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Smile, SmileWink, GrinStars } from '../../Util/faIcon';
import './style/SubDustState.css';

const SubDustState = () => {
  const context = useContext(AppContext);
  const { dustState, dustLevel } = context;
  const { dustData } = dustState;
  const localIndex = dustData.findIndex((d) => d.MSRSTE_NM === '성동구');
  const localDustPM10 = dustData[localIndex] ? dustLevel(dustData[localIndex].PM10) : '';
  const localDustPM25 = dustData[localIndex] ? dustLevel(dustData[localIndex].PM25) : '';
  const localDustNO2 = dustData[localIndex] ? dustLevel(dustData[localIndex].NO2) : '';
  const localDustO3 = dustData[localIndex] ? dustLevel(dustData[localIndex].O3) : '';
  const localDustCO = dustData[localIndex] ? dustLevel(dustData[localIndex].CO) : '';
  const localDustSO2 = dustData[localIndex] ? dustLevel(dustData[localIndex].SO2) : '';
  const pm10 = dustData[localIndex] ? dustData[localIndex].PM10 : '';
  const pm25 = dustData[localIndex] ? dustData[localIndex].PM25 : '';
  const no2 = dustData[localIndex] ? dustData[localIndex].NO2 : '';
  const o3 = dustData[localIndex] ? dustData[localIndex].O3 : '';
  const co = dustData[localIndex] ? dustData[localIndex].CO : '';
  const so2 = dustData[localIndex] ? dustData[localIndex].SO2 : '';

  return (
    <div
      className={
        (localDustPM10.state === '최고 좋음'
          ? 'sub-dust-state-grinstars'
          : localDustPM10 === '좋음'
          ? 'sub-dust-state-laughsquint'
          : localDustPM10 === '양호'
          ? 'sub-dust-state-smilewink'
          : localDustPM10 === '보통'
          ? 'sub-dust-state-smile'
          : localDustPM10 === '나쁨'
          ? 'sub-dust-state-frown'
          : localDustPM10 === '상당히 나쁨'
          ? 'sub-dust-state-tired'
          : localDustPM10 === '매우 나쁨'
          ? 'sub-dust-state-dizzy'
          : localDustPM10 === '최악'
          ? 'sub-dust-state-skull'
          : 'sub-dust-state-smile',
        'sub-dust-state')
      }
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
    >
      <div className="sub-pm10">
        <div>미세먼지</div>
        <SmileWink />
        <div>{localDustPM10.state}</div>
        <div>{pm10} µm/m³</div>
      </div>
      <div className="sub-pm25">
        <div>초미세먼지</div>
        <Smile />
        <div>{localDustPM25.state}</div>
        <div>{pm25} µm/m³</div>
      </div>
      <div className="sub-no2">
        <div>이산화질소</div>
        <GrinStars />
        <div>{localDustNO2.state}</div>
        <div>{no2} ppm</div>
      </div>
      <div className="sub-o3">
        <div>오존</div>
        <GrinStars />
        <div>{localDustO3.state}</div>
        <div>{o3} ppm</div>
      </div>
      <div className="sub-co">
        <div>일산화탄소</div>
        <GrinStars />
        <div>{localDustCO.state}</div>
        <div>{co} ppm</div>
      </div>
      <div className="sub-so2">
        <div>아황산가스</div>
        <GrinStars />
        <div>{localDustSO2.state}</div>
        <div>{so2} ppm</div>
      </div>
    </div>
  );
};

export default SubDustState;
