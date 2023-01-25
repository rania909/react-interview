import { Button, Grid,Tooltip } from "@nextui-org/react";
import React from "react";
import { ThumbIcon } from "../../assets/icons/ThumbUpIcon";

function LikeDislike({ movie, onLike, onDislike }) {
  return (
    <Tooltip
      placement="top"
      content={
        <>
          {movie.likes} Likes | {movie.dislikes} Dislikes
        </>
      }
    >
      <Grid.Container>
        <Button.Group light color="" auto>
          <Button auto flat onClick={() => onLike(movie.id)} icon={<ThumbIcon size={24} />} />
          <Button auto flat onClick={() => onDislike(movie.id)} icon={<ThumbIcon size={24} style={{ transform: "rotate(180deg)" }} />} />
        </Button.Group>
      </Grid.Container>
    </Tooltip>
  );
}

export default LikeDislike;
