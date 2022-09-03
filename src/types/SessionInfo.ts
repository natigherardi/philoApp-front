export default interface SessionInfo {
  userData: { id: string; name: string; password: string };
  isLoggedIn: boolean;
}
