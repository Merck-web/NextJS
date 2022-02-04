import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import { Menu } from "../Menu/Menu";
import Logo from "./icons/logo.svg";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
