import React, { useState, useEffect } from "react";
import MobileStepHeader from "./MobileStepHeader";
import { Link } from "react-router-dom";
import ChangeStepfooter from "./ChangeStepfooter";

const select = "text-[#0d274f] font-bold";
const unselect = "text-[#b0afb4] font-medium text-md";

const chosen =
  "flex justify-start items-center  py-5 rounded-lg gap-3 outline outline-[1.6px] bg-[#f8f9fe] outline-[#7a70c3] transition duration-200";
const unchosen =
  "flex justify-start items-center  py-5 rounded-lg gap-3 outline outline-[#b0afb4]  outline-[1.6px]  transition duration-200";
function SecondStep({
  handleArcadeChoice,
  handleAdvancedChoice,
  handleProChoice,
  handleSelectedPlan,
}) {
  const [selected, setUnselected] = useState(true);
  const [arcadechosen, setArcadechosen] = useState(false);
  const [advancedchosen, setAdvacedchosen] = useState(false);
  const [prochosen, setProchosen] = useState(false);
  useEffect(() => {
    handleArcadeChoice(arcadechosen);
    handleProChoice(prochosen);
    handleAdvancedChoice(advancedchosen);
    handleSelectedPlan(selected ? 'monthly' : 'yearly');
  }, [arcadechosen, advancedchosen, prochosen, selected]);

  return (
    <>
      <MobileStepHeader selected2={true} steps={true} />

      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl'>Select your plan</h1>

        <p className='text-[#b0afb4] font-medium text-md'>
          You have the option of monthly or yearly billing.
        </p>

        <div className='flex flex-col justify-center mt-5 gap-4'>
          <button
            className={arcadechosen ? chosen : unchosen}
            onClick={() => {
              setArcadechosen(!arcadechosen);
              setAdvacedchosen(false);
              setProchosen(false);
            }}>
            <span className='ml-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'>
                <g fill='none' fillRule='evenodd'>
                  <circle cx='20' cy='20' r='20' fill='#FFAF7E' />
                  <path
                    fill='#FFF'
                    fillRule='nonzero'
                    d='M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z'
                  />
                </g>
              </svg>
            </span>{" "}
            <span className='flex flex-col'>
              <h2 className='text-[#0d274f] font-bold '>Arcade</h2>
              <p className='text-[#b0afb4] font-medium text-md'>$9/mo</p>
            </span>
          </button>

          <button
            className={advancedchosen ? chosen : unchosen}
            onClick={() => {
              setAdvacedchosen(!advancedchosen);
              setProchosen(false);
              setArcadechosen(false);
            }}>
            <span className='ml-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'>
                <g fill='none' fillRule='evenodd'>
                  <circle cx='20' cy='20' r='20' fill='#F9818E' />
                  <path
                    fill='#FFF'
                    fillRule='nonzero'
                    d='M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z'
                  />
                </g>
              </svg>
            </span>{" "}
            <span className='flex flex-col'>
              <h2 className='text-[#0d274f] font-bold '>Advaced</h2>
              <p className='text-[#b0afb4] font-medium text-md'>$12/mo</p>
            </span>
          </button>

          <button
            className={prochosen ? chosen : unchosen}
            onClick={() => {
              setProchosen(!prochosen);
              setAdvacedchosen(false);
              setAdvacedchosen(false);
            }}>
            <span className='ml-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'>
                <g fill='none' fillRule='evenodd'>
                  <circle cx='20' cy='20' r='20' fill='#483EFF' />
                  <path
                    fill='#FFF'
                    fillRule='nonzero'
                    d='M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z'
                  />
                </g>
              </svg>
            </span>{" "}
            <span className='flex flex-col'>
              <h2 className='text-[#0d274f] font-bold '>Pro</h2>
              <p className='text-[#b0afb4] font-medium text-md'>$15/mo</p>
            </span>
          </button>
        </div>

        <div className='bg-[#f8f9fe] flex justify-around items-center  rounded-lg mx-1 py-3 mt-3'>
          <p className={selected ? select : unselect}>Monthly</p>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={(e) => {
                setUnselected((prevSelect) => !prevSelect);
              }}
            />
            <span className='slider round'></span>
          </label>
          <p className={!selected ? select : unselect}>Yearly</p>
        </div>
      </div>

      <ChangeStepfooter to={"/thirdstep"} goBack={true} goBackTo={"/"} />
    </>
  );
}

export default SecondStep;
