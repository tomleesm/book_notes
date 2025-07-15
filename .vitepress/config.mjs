import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "網路上的書",
  description: "網路上的書",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      {
        text: '書籍目錄',
        items: [
          { text: 'Shape Up', link: '/shape up/preface' },
          { text: '精通 JavaScript', link: '/eloquent javascript/ch05' },
        ]}
    ],

    sidebar:
    {
      'shape up': [
	{
	  text: 'Shape Up',
	  items: [
	    { text: '前言 Foreword by Jason Fried', link: '/shape up/preface' },
	    { text: '第一章 Introduction 入門', link: '/shape up/ch01' },
	    { text: '第二章 Principles of Shaping 塑形原則', link: '/shape up/ch02' },
	    { text: '第三章 Set Boundaries 設定邊界', link: '/shape up/ch03' },
	    { text: '第四章 Find the Elements 找出元素', link: '/shape up/ch04' },
	    { text: '第五章 Risks and Rabbit Holes 風險與陷阱', link: '/shape up/ch05' },
	    { text: '第六章 Write the Pitch 撰寫提案', link: '/shape up/ch06' },
	    { text: '第七章 Bets, Not Backlogs 下注，而非待辦清單', link: '/shape up/ch07' },
	    { text: '第八章 The Betting Table 投注會議', link: '/shape up/ch08' },
	    { text: '第九章 Place Your Bets 下定決心', link: '/shape up/ch09' },
	    { text: '第十章 Hand Over Responsibility 移交責任', link: '/shape up/ch10' },
	    { text: '第十一章 Get One Piece Done 完成一個小目標', link: '/shape up/ch11' },
	    { text: '第十二章 Map the Scopes 繪製範圍', link: '/shape up/ch12' },
	    { text: '第十三章 Show Progress 顯示進度', link: '/shape up/ch13' },
	    { text: '第十四章 Decide When to Stop 決定何時停止', link: '/shape up/ch14' },
	    { text: '第十五章 Move On 繼續前進', link: '/shape up/ch15' },
	    { text: 'Conclusion 結論', link: '/shape up/conclusion'},
	    { text: 'How to Implement Shape Up in Basecamp 如何在 Basecamp 中實現 Shape Up', link: '/shape up/how to implement shape up in basecamp'},
	    { text: 'Adjust to Your Size 調整至你的規模', link: '/shape up/adjust to your size'},
	    { text: 'How to Begin to Shape Up 如何開始 Shape Up', link: '/shape up/how to begin to shape up'},
	    { text: 'Glossary 詞彙表', link: '/shape up/glossary'},
	    { text: 'About the Author 關於作者', link: '/shape up/about the author'}
	  ]
	}
      ],
      'eloquent javascript': [
	{
	  text: '精通 JavaScript',
	  items: [
	    { text: '5 高階函式', link: '/eloquent javascript/ch05' },
	  ]
	}
      ],
    }
  }
})
