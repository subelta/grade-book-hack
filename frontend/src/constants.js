export const Endpoints = {
	SUBJECTS_DATA: 'http://54.218.67.133/subjects/data',
	SUBJECTS: 'http://54.218.67.133/subjects',
};

export const COLORS = {
	"Русский язык": "blue",
	"Физика": "red",
	"Алгебра": "cyan",
	"Английский язык": "green",
	"Геометрия": "purple",
	"Астрономия": "magenta",
}

export const subjectsDataMock = [
	{
		name: "Вася",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grade: 4
					},
					{
						absent: false,
						date: "2021-09-10",
						grade: 3
					},
					{
						absent: false,
						date: "2021-09-13",
						grade: null
					},
					{
						absent: true,
						date: "2021-09-15",
						grade: null
					},
					{
						absent: false,
						date: "2021-09-16",
						grade: 5
					}
				]
			}
		]
	},
	{
		name: "Петя",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grade: 4
					},
					{
						absent: false,
						date: "2021-09-10",
						grade: 3
					},
					{
						absent: false,
						date: "2021-09-13",
						grade: null
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-16",
						grades: [5]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-19",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Катя",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Андрей",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Екатерина Екатеринова",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Иван Иванов",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Виталий",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Михаил",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Антон",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Иннокентий",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Альфия",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "София",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Артем",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Екатерина 2",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	},
	{
		name: "Дмитрий",
		subjects: [
			{
				subjectName: "Русский язык",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [4]
					},
					{
						absent: true,
						date: "2021-09-10",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-13",
						grades: [3]
					},
					{
						absent: true,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: true,
						date: "2021-09-16",
						grades: [2]
					}
				]
			},
			{
				subjectName: "Физика",
				dates: [
					{
						absent: false,
						date: "2021-09-04",
						grades: [5]
					},
					{
						absent: false,
						date: "2021-09-11",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-15",
						grades: []
					},
					{
						absent: false,
						date: "2021-09-19",
						grades: [5,5]
					},
					{
						absent: false,
						date: "2021-09-20",
						grades: [5]
					}
				]
			}
		]
	}
]
