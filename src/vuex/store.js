import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);

// 需要维护的状态
const state = {
  cartList: [],
  GoodsList: [
    {
      id: '1',
      proUrl: '../../static/images/goods1.jpg',
      proInfo: '【天猫超市】新希望 酸奶airsnow轻爱轻质感饮用型酸奶200g*12盒/箱 ',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    },
    {
      id: '1',
      proUrl: '../../static/images/goods2.jpg',
      proInfo: '【天猫超市】伊利 无菌砖高钙低脂奶250ml*24盒',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    },
    {
      id: '1',
      proUrl: '../../static/images/goods3.jpg',
      proInfo: '【天猫超市】itoTokyoa铝镁合金包角拉杆箱万向轮男女行李箱旅行箱登机箱20英寸 银色',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    },
    {
      id: '1',
      proUrl: '../../static/images/goods1.jpg',
      proInfo: '【天猫超市】新希望 酸奶airsnow轻爱轻质感饮用型酸奶200g*12盒/箱 ',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    },
    {
      id: '1',
      proUrl: '../../static/images/goods2.jpg',
      proInfo: '【天猫超市】伊利 无菌砖高钙低脂奶250ml*24盒',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    },
    {
      id: '1',
      proUrl: '../../static/images/goods3.jpg',
      proInfo: '【天猫超市】itoTokyoa铝镁合金包角拉杆箱万向轮男女行李箱旅行箱登机箱20英寸 银色',
      oldPrice: 128,
      isEdit: true,
      isSelected: false,
      unitPrice: 28
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});

