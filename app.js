new Vue({
    el: '.app',
    data: {
        notes: [],
        currentNote: null
    },
    methods: {
        createNote() {
            const newNote = {title: '', contents: ''};
            this.notes.push(newNote);
            this.currentNote = newNote;
            this.$nextTick(function() {
            this.$refs.noteTitle.focus();
            });
        }
    }
});