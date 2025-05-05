import SideMenu from "./_components/side-menu";
import { UserInfo } from "./_components/user-info";

export default async function CompositionPattern() {
  return (
    <div>
      <div>
        <h1>Composition Pattern</h1>
      </div>
      <SideMenu>
        <UserInfo />
      </SideMenu>
    </div>
  );
}
