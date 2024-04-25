import ProgressSvg from "./progress.svg";
import "./index.css";
// import styles from "./index.module.css";

const steps = [
  {
    key: 1,
    title: "检测开始",
    status: "done",
  },
  {
    key: 2,
    title: "步骤1",
    status: "done",
  },
  {
    key: 3,
    title: "步骤2",
    status: "running",
  },
  {
    key: 4,
    title: "步骤3",
    status: "wait",
  },
  {
    key: 5,
    title: "步骤4",
    status: "wait",
  },
  {
    key: 6,
    title: "步骤5",
    status: "wait",
  },
  {
    key: 7,
    title: "检测结束",
    status: "wait",
  },
];

// 这里只把背景图形用svg画出来了,可以把svg内嵌到代码中，直接使用，那么text和icon都可以用svg的元素完成，并自定义样式
const Progress = () => {
  return (
    <div className="progress">
      <ul className="steps">
        {steps.map((item) => {
          const { key, title, status } = item;
          return (
            <li key={key} className={`step ${status}`}>
              <ProgressSvg className="svg"/>
              <div className="texts">
                <i className="icon"></i>
                <span className="text">{title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Progress;
