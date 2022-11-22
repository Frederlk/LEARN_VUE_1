export default {
    mounted(el, binding) {
        const options = {
            rootMargin: "0px",
            threshold: 1,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && binding.value.page < binding.value.totalPages) {
                binding.value.func();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: "intersection",
};
