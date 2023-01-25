import React, { useState } from "react";
import { Grid, Button, Popover } from "@nextui-org/react";
import { ChevronLeftIcon } from "../../assets/icons/ChevronLeftIcon";

function Pagination({ pagination, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPageList = [4, 8, 12];

  const selectPerPageValue = (item) => {
    setIsOpen(false);
    onChange({ ...pagination, perPage: item, page: 1 });
  };

  const prevPage = () => {
    setIsOpen(false);
    onChange({ ...pagination, page: pagination.page - 1 });
  };

  const nextPage = () => {
    setIsOpen(false);
    onChange({ ...pagination, page: pagination.page + 1 });
  };

  return (
    <Grid.Container gap={2}>
      <Grid xs={12} css={{ justifyContent: "flex-end" }}>
        <Button auto flat color="info" onClick={prevPage} disabled={!pagination.hasPreviousPage}>
          <ChevronLeftIcon />
        </Button>
        <Popover isOpen={isOpen}>
          <Popover.Trigger>
            <Button
              auto
              color={"info"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {pagination.perPage}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            {itemsPerPageList.map((item, i) => {
              return (
                <Button key={"item_" + i} auto flat={item !== pagination.perPage} color={"info"} onClick={() => selectPerPageValue(item)}>
                  {item}
                </Button>
              );
            })}
          </Popover.Content>
        </Popover>
        <Button auto flat color="info" onClick={nextPage} disabled={!pagination.hasNextPage}>
          <ChevronLeftIcon style={{ transform: "rotate(180deg)" }} />
        </Button>
      </Grid>
    </Grid.Container>
  );
}

export default Pagination;
