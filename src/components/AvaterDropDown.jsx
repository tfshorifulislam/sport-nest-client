import { Avatar, Dropdown, Label } from "@heroui/react";

export function AvaterDropDown({ user }) {
    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar className='cursor-pointer'>
                    < Avatar.Image alt={user.name} src={user.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0).toUpperCase()}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt="Jane"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                            />
                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">Jane Doe</p>
                            <p className="text-xs leading-none text-muted">jane@example.com</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    <Dropdown.Item id="dashboard" textValue="Dashboard">
                        <Label>Dashboard</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Label>Profile</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="settings" textValue="Settings">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Settings</Label>

                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="new-project" textValue="New project">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Create Team</Label>

                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Log Out</Label>

                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}