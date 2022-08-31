interface UserRepository<T> {
  register: (userData: T) => Promise<T>;
}

export default UserRepository;
