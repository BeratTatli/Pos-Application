import { Modal } from "antd";

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  return (
    <Modal
      title="Create Bill"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    ></Modal>
  );
};

export default CreateBill;
