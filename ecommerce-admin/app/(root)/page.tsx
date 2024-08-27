"use client";
import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="Test" description="Test modal" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
