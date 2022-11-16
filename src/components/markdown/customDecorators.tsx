import React from "react";

import {
  CompositeDecorator,
} from "draft-js";

function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "IMAGE"
    );
  }, callback);
}
const Image = (props) => {
  const { alt, height, src, width } = props.contentState.getEntity(props.entityKey).getData();

  return <img alt={alt} src={src} height={height} width={width} style={{ maxWidth: '100%' }} />;
};

const decorators = [
  {
    strategy: findImageEntities,
    component: Image
  }
];

const decorator = new CompositeDecorator(decorators);

export {
  decorator,
  decorators,
};

