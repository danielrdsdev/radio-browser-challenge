import { ModeToggle } from "./mode-toggle";

export const Header = () => {
	return (
		<header className="px-12 h-20 flex items-center justify-between">
			<h1 className="font-semibold tracking-tight text-xl">Radio Browser</h1>
			<ModeToggle />
		</header>
	);
};
