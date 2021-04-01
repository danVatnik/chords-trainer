/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import { Sidebar } from './sidebar';
import { MainPanel } from './mainPanel';

const App = () => {

  const tempoToTimeInterval = t => Math.pow(t / 60000, -1);

  const [timeInterval, setTimeInterval] = useState(tempoToTimeInterval(100));
  const [tempo, setTempo] = useState(100)
  const [showTabs, setShowTabs] = useState(false);

  const onTimeIntervalChange = (value) => { setTempo(value); setTimeInterval(tempoToTimeInterval(value)) };
  const onDisplayTabsChange = () => setShowTabs(!showTabs);

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-3 mr-0 px-3" href="#">Chords Progression Trainer</a>
      </nav>
      <div className="container-fluid">
        <main role="main">
          <div className="row pt-5">
              <div className="col-3">
                <Sidebar tempo={tempo} onTimeIntervalChange={onTimeIntervalChange} onDisplayTabsChange={onDisplayTabsChange} />
              </div>
              <div className="col-9">
                <MainPanel timeInterval={timeInterval} showTabs={showTabs} />
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
