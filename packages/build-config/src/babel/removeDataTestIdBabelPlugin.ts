export function removeDataTestIdBabelPlugin() {
  return {
    visitor: {
      Program(path: any, state: any) {
        const forbiddenProps = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current: any) {
            const nodeName = current.node.name;
            if (forbiddenProps.includes(nodeName)) {
              current.parentPath.remove();
            }
          }
        })
      }
    }
  }
}