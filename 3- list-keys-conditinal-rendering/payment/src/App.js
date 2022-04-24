import "./App.css";
import Arrow from "./Arrow";
import Date from "./components/Date";
import Desktop from "./components/Desktop";
import Icon from "./components/Icon";
import Study from "./components/Study";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div>
        <Date date={"28/10/2020"} />
        <Study text={"Case Study"} />

        <Title title={"Amazon"} title1={"Gift"} />
        <Desktop title={"Desktop -Mobile"} />
      </div>

      <div>
        <div className="right">
          <div>
            <Icon
              img={
                "https://w7.pngwing.com/pngs/372/309/png-transparent-amazon-com-affiliate-marketing-wordpress-advertising-sales-amazon-icon-text-service-logo-thumbnail.png"
              }
            />
          </div>
          <div className="arr">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
