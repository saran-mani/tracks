import React, { useContext } from "react";
import { Input, Button, Text } from "@rneui/base";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { trackName, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          value={trackName}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
