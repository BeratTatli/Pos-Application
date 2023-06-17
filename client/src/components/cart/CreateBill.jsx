import { Button, Form, Input, Modal, Select, Card } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal
      title="Create Bill"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Customer Name"
          name={"customerName"}
          rules={[{ required: true, message: "Customer name cannot be empty" }]}
        >
          <Input placeholder="Enter a Name" />
        </Form.Item>
        <Form.Item
          label="Telephone Number"
          name={"telephoneNumber"}
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter a Telephone Number" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Payment Type"
          name={"paymentType"}
          rules={[{ required: true, message:"Customer name cannot be empty"}]}
        >
          <Select placeholder="Select Payment Type">
            <Select.Option value="Cash" />
            <Select.Option value="Credit Card" />
          </Select>
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Tax Total %8</span>
            <span className="text-red-600">42.23</span>
          </div>
          <div className="flex justify-between">
            <b>Total</b>
            <b>591.23₺</b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Create Order
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
