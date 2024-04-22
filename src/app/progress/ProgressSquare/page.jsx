// import "./index.css";

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

// 矩形进度条
const ProgressSquare = () => {
  return (
    <div className="progress">
      <ul className="steps">
        {steps.map((item) => {
          const { key, title, status } = item;
          return (
            <li key={key} className={`step ${status}`}>
              <i className="icon"></i>
              <span className="text">{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default ProgressSquare;
