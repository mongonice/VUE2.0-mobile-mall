function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
};

const initNote = {
  id: +new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容',
  favorite: false
};

// 模拟初始化数据
const initData = {
  show: 'all',
  notes: [initNote],
  activeNote: initNote
};

export const initStore = ({ dispatch }) => {
  dispatch('INIT_STORE', initData);
};
// 更新当前activeNote对象
export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');

// 添加一个note对象
export const newNote = makeAction('NEW_NOTE');

// 删除一个note对象
export const deleteNote = makeAction('DELETE_NOTE');
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');
export const editNote = makeAction('EDIT_NOTE');

// 更新列表展示
export const updateShow = makeAction('SET_SHOW_ALL');
