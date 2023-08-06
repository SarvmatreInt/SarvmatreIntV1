import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
const InvesterContact = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="py-20">
      <div className="container">
          <Drawer position="right"  opened={opened} onClose={close} title="Send a mesage ">
            <div>
              <form action="">
                {/* input fields
                1. name
                e.
                 */}
              </form>
            </div>
          </Drawer>
        <div className="border-2 border-black">
        <h1>Invester Contact</h1>
        <div>

        <Group>
          <Button onClick={open} className="button-17 text-black">
            Send a message
          </Button>
        </Group>
        </div>
        </div>

      </div>
    </div>
  );
};

export default InvesterContact;
