import "./index.css";
import ProgressSquare from "./ProgressSquare/page";
import ProgressSquareWithBorder from "./ProgressSquareWithBorder/page";

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

// 进度条集合
const ProgressList = () => {
  const list = [
    {
      title: "矩形进度条",
      component: ProgressSquare,
    },
    {
      title: "矩形进度条带描边",
      component: ProgressSquareWithBorder,
    },
  ];

  return (
    <ul className="progressList">
      {list.map((item) => (
        <li key={item.title}>
          <h3 className="title">{item.title}</h3>
          <item.component steps={steps} />
        </li>
      ))}
    </ul>
  );
};

export default ProgressList;
