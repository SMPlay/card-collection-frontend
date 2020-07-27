import React, { createRef } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { GET_USER, SET_USER_AVATAR } from "../queries";
import { Loading, ReceivedError } from "../components";

export interface User {
  id: string;
}

export interface UserData {
  user: User;
}

export interface UserFetchVariables {
  id: string;
}

export const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const fileInputRef = createRef<HTMLInputElement>();
  const [setAvatar, { loading: avatarLoading }] = useMutation(SET_USER_AVATAR);
  const { data, loading, error } = useQuery<UserData, UserFetchVariables>(
    GET_USER,
    { variables: { id } }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileInputRef?.current?.files![0];

    setAvatar({ variables: { id, avatar: file } });
  };

  return (
    <main>
      <Container>
        {error && <ReceivedError />}
        {loading || avatarLoading ? (
          <Loading />
        ) : (
          <>
            <h1>{data?.user?.id}</h1>
            <form onSubmit={onSubmit}>
              <input type="file" ref={fileInputRef}/>
              <Button type="submit">Загрузить фото</Button>
            </form>
          </>
        )}
      </Container>
    </main>
  );
};
