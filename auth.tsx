import React, { useState } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

const Auth: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    username: null,
  });

  const login = () => {
    setAuthState({
      isAuthenticated: true,
      username: 'user', 
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      username: null,
    });
  };

  return (
    <div>
      {authState.isAuthenticated ? (
        <div>
          <p>Welcome, {authState.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
