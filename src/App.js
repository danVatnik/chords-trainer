/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import { Sidebar } from './sidebar';
import { MainPanel } from './mainPanel';
import { Level } from './chords';

const App = () => {
  const [timeInterval, setTimeInterval] = useState(2000);
  const [countSpeed, setCountSpeed] = useState(0.25)
  const [showTabs, setShowTabs] = useState(false);
  const [level, setLevel] = useState(Level.Easy);

  const onTimeIntervalChange = (value) => { setCountSpeed(value/1000); setTimeInterval(2250 - value)};
  const onDisplayTabsChange = () => setShowTabs(!showTabs);
  const onLevelChange = () => setLevel(level === Level.Easy ? Level.Medium : Level.Easy);

  return (
    <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-3 mr-0 px-3" href="#">Chords Progression Trainer</a>
      </nav>
      <div class="container-fluid">
        <main role="main">
          <div class="row pt-5">
              <div class="col-3">
                <Sidebar countSpeed={countSpeed} onTimeIntervalChange={onTimeIntervalChange} onDisplayTabsChange={onDisplayTabsChange} onLevelChange={onLevelChange}/>
              </div>
              <div class="col-9">
                <MainPanel timeInterval={timeInterval} showTabs={showTabs} level={level}/>
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
