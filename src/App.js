import logo from './logo.svg';
import './App.css';
import Talent from '../src/components/Talent';
import Fan from '../src/components/Fan';
import { useTabs, TabPanel } from 'react-headless-tabs';
import { TabSelector } from '../src/components/TabSelector.tsx';

function App() {


  const [selectedTab, setSelectedTab] = useTabs([
    'fan',
    'talent',
  ]);

  return (
    <>
      <div className="bg-black w-full absolute flex justify-center">
        <div className="bg-gray-900  my-16 border-0 w-3/6 rounded-xl ">
          <div className="my-14 flex justify-center">
            <nav className="flex justify-center rounded-full bg-black w-fit">
              <TabSelector
                isActive={selectedTab === 'fan'}
                onClick={() => setSelectedTab('fan')}
              >
                FAN SIGNUP
              </TabSelector>
              <TabSelector
                isActive={selectedTab === 'talent'}
                onClick={() => setSelectedTab('talent')}
              >
                TALENT SIGNUP
              </TabSelector>
            </nav>
          </div>



          <div className="bg-gray-900">

            <TabPanel hidden={selectedTab !== 'fan'}>
              <div className=" flex justify-center">
                <p className="text-2xl text-white">Create Your Fan Account</p>
              </div>
              <section className=" flex justify-center">
                <Fan />
              </section>
            </TabPanel>

            <TabPanel hidden={selectedTab !== 'talent'}>
              <div className=" flex justify-center">
                <p className="text-2xl text-white">Create Your Talent Account</p>
              </div>
              <section className=" flex justify-center">
                <Talent />
              </section>
            </TabPanel>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
