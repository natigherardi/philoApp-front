export default interface SessionInfo {
  userData: { id: string; username: string; token: string };
  isLoggedIn: boolean;
}
