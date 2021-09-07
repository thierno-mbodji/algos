package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
	"time"
)

var wg sync.WaitGroup

func fetchWithChannel(urls []string, ch chan string) {

	for _, url := range urls {
		start_time := time.Now()
		resp, err := http.Get(url)
		end_time := time.Since(start_time)
		if err != nil {
			fmt.Println(err)
			return
		}

		//on veut avoir le body
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println(err)
			return
		}
		defer resp.Body.Close()
		res := fmt.Sprintf("Site: %s | Lenght: %d | Pocessing time: %s \n", url, len(body), end_time)
		ch <- res
	}
	close(ch)
}

func fetch(url string) {
	defer wg.Done()
	start_time := time.Now()
	resp, err := http.Get(url)
	end_time := time.Since(start_time)
	if err != nil {
		fmt.Println(err)
		return
	}

	//on veut avoir le body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()
	fmt.Printf("Site: %s | Lenght: %d | Pocessing time: %s \n", url, len(body), end_time)
}

// SERIALISATION ET DESERIALISATION
type user struct {
	Name  string `json:"user_name"`
	Age   int    `json:"age"`
	Group string `json:"group"`
}

func binarySearch(A []int, n int, x int) int {
	var start int = 0
	var end int = n - 1
	i := 0
	for start <= end {
		mid := start + (end-start)/2
		if A[mid] == x {
			return mid
		} else if A[mid] < x {
			end = mid - 1
		} else {
			start = mid + 1
		}
		i++
	}
	return -1
}
func main() {
	fmt.Println("Hello, World!")
	fmt.Println("-----------SERIALISATION-----------------")
	u1 := user{Name: "thierno", Age: 25, Group: "shinigami"}
	res, err := json.Marshal(u1)
	if err != nil {
		fmt.Println(err)
	}
	json_data := string(res)
	fmt.Println(u1, json_data)
	fmt.Println("-----------------------DESERIALISATION------------------")
	u2 := user{}
	err = json.Unmarshal([]byte(json_data), &u2)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(u2)

	//HTTP GOROUTINE

	urls := []string{"https://wikipedia.org", "https://google.com",
		"http://facebook.com", "https://www.senepharma.com/",
		"https://senepharmadmin.herokuapp.com"}
	size := len(urls)
	wg.Add(size)
	for _, url := range urls {
		go fetch(url)
	}
	wg.Wait()

	//---------------------

	fmt.Println("------------------------------------------------------")

	ch := make(chan string, size) //ceci c'est le phenomene de buffered le contraire unbeferred(1)
	go fetchWithChannel(urls, ch)
	ok := true
	for ok {
		select {
		case s, open := <-ch:
			{
				if !open {
					ok = false
				}
				fmt.Printf("%s", s)
			}
		}
	}
}
